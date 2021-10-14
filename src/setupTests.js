// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

global.mockContext = {
    artist: {
        id: 1,
        name: 'Rihanna',
        picture_medium: 'path-to-picture',
        picture_big: 'path-to-picture',
        nb_fan: '10000',
        nb_album: '120'
    },
    loading: false,
    artists: [
        {
            id: 1,
            name: 'Rihanna',
            picture_medium: 'path-to-picture',
            picture_big: 'path-to-picture',
            nb_fan: '10000',
            nb_album: '120'
        },
        {
            id: 2,
            name: 'Eminem',
            picture_medium: 'path-to-picture',
            picture_big: 'path-to-picture',
            nb_fan: '10000',
            nb_album: '120'
        }
    ],
    tracks: [
        {
            title_short: 'track 1',
            duration: '120'
        },
        {
            title_short: 'track 2',
            duration: '240'
        },
        {
            title_short: 'track 3',
            duration: '360'
        },
        {
            title_short: 'track 4',
            duration: '220'
        },
        {
            title_short: 'track 5',
            duration: '400'
        }
    ],
    albums: [
        { title: 'Title', cover_medium: 'path-to-jpeg.png', release_date: '2004-10-02' },
        { title: 'Title 2', cover_medium: 'path-to-jpeg.png', release_date: '2005-10-02' },
        { title: 'Title 3', cover_medium: 'path-to-jpeg.png', release_date: '2007-10-02' },
        { title: 'Title 4', cover_medium: 'path-to-jpeg.png', release_date: '2008-10-02' },
    ],
    getArtist: jest.fn(),
    searchArtist: jest.fn(),
}