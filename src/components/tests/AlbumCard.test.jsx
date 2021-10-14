import React from 'react';
import { shallow } from 'enzyme';
import AlbumCard from '../AlbumCard';

describe("Test AlbumCard component", () => {
    it("renders without crashing", async () => {
        const album = { title: 'Title', cover_medium: 'path-to-jpeg.png', release_date: '2004-10-02' }
        const wrapper = shallow(<AlbumCard album={album} />);
        expect(wrapper.find(".album-card")).toHaveLength(1);
        expect(wrapper.find("img").prop("src")).toEqual(album.cover_medium);
        expect(wrapper.find(".card-title").text()).toBe(album.title);
        expect(wrapper.find(".card-text").text()).toBe('2004');
    });
});