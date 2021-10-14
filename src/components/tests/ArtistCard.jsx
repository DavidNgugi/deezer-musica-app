import React from 'react';
import { shallow } from 'enzyme';

import ArtistCard from '../ArtistCard';
import DeezerContext from '../../contexts/DeezerContext';
import { nFormatter } from '../../utils';
import { fireEvent, render } from '@testing-library/react';

describe("Test ArtistCard component", () => {

    const artist = {
        id: 1,
        name: 'Rihanna',
        picture_medium: 'path-to-picture',
        picture_big: 'path-to-picture',
        nb_fan: '10000',
        nb_album: '120'
    }

    it("renders without crashing", async () => {

        const wrapper = shallow(<ArtistCard artist={artist} />);

        expect(wrapper.find(".artist-card")).toHaveLength(1);
        expect(wrapper.find("img").prop("src")).toEqual(artist.picture_medium);
        expect(wrapper.find(".fans").text()).toBe(`${nFormatter(artist.nb_fan)} Fans`);
        expect(wrapper.find(".album-count").text()).toBe(`${nFormatter(artist.nb_album)} Albums`);
    });

    it("onclick card, artist data is set", async () => {

        const TestComponent = () => (
            <DeezerContext.Provider value={mockContext}>
                <ArtistCard artist={artist} onClick={mockContext.getArtist} />
            </DeezerContext.Provider>
        )

        const wrapper = render(
            <TestComponent />
        );

        const card = wrapper.getByTestId("artist-card")
        expect(card).toBeVisible();

        fireEvent.click(card)

        expect(mockContext.getArtist).toHaveBeenCalledTimes(1);
        expect(mockContext.artist).toEqual(artist)
    })
});