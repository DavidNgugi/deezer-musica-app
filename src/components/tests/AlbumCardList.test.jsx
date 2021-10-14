import React from 'react';
import { shallow } from 'enzyme';

import DeezerContext from '../../contexts/DeezerContext';
import ArtistCardList from '../ArtistCardList';

describe("Test ArtistCardList component", () => {

    const artists = [
        {
            id: 1,
            name: 'Rihanna',
            picture_medium: 'path-to-picture',
            nb_fan: '10000',
            nb_album: '120'
        },
        {
            id: 2,
            name: 'Eminem',
            picture_medium: 'path-to-picture',
            nb_fan: '10000',
            nb_album: '120'
        }
    ];

    it("renders without crashing", async () => {

        const TestComponent = () => (
            <DeezerContext.Provider value={mockContext}>
                <ArtistCardList />
            </DeezerContext.Provider>
        )

        const wrapper = shallow(
            <TestComponent />
        ).dive().dive().dive();

        expect(wrapper.find(".list-body")).toHaveLength(1);
        expect(wrapper.find(".list-header").text()).toBe("Deezer Artists");
        expect(wrapper.find("li")).toHaveLength(2);
    });

});