import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResumeBody from '../components/resumeBody';

configure({ adapter: new Adapter() });
const mockStore = configureStore();
jest.mock('react-dom');

const location = {
    pathname:'/home'
}

let initialState = {
    userDetailsReducer: {},
    repoDetailsReducer: {}
};

let store = mockStore(initialState);

const div = global.document.createElement('div');

describe("ResumeBody Component", () => {
    it('renders without crashing', () => {
        ReactDOM.render(<Router><ResumeBody store={store} location={location} /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});