import React from 'react';
import { shallow } from 'enzyme';

import DeezerContext from '../../contexts/DeezerContext';
import ArtistDetails from '../ArtistDetails';
import { nFormatter } from '../../utils';

describe("Test ArtistDetails component", () => {

    const artist = {
        id: 1,
        name: 'Rihanna',
        picture_medium: 'path-to-picture',
        picture_big: 'path-to-picture',
        nb_fan: '10000',
        nb_album: '120'
    };

    it("renders without crashing", async () => {

        const TestComponent = () => (
            <DeezerContext.Provider value={mockContext}>
                <ArtistDetails />
            </DeezerContext.Provider>
        )

        const wrapper = shallow(
            <TestComponent />
        ).dive().dive().dive();

        console.log(wrapper.find(".artist-picture").prop("src"))
        expect(wrapper.find(".artist-details")).toHaveLength(1);
        expect(wrapper.find(".header-top").text()).toBe("Deezer Artist");
        expect(wrapper.find(".albums-list").text()).toBe("Albums");
        expect(wrapper.find("img.artist-picture").prop("src")).toEqual(artist.picture_big);
        expect(wrapper.find(".artist-name").text()).toBe(artist.name);
        expect(wrapper.find(".fans").text()).toBe(`${nFormatter(artist.nb_fan)} Fans`);
        expect(wrapper.find("li.track-item")).toHaveLength(5);
        expect(wrapper.find(".album-card")).toHaveLength(4);
    });

});