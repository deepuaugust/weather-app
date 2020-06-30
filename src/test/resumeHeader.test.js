import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResumeHeader from '../components/resumeHeader';

configure({ adapter: new Adapter() });
jest.mock('react-dom');

const location = {
    pathname:'/home'
}

const div = global.document.createElement('div');

describe("ResumeHeader Component", () => {
    it('renders without crashing', () => {
        ReactDOM.render(<Router><ResumeHeader location={location} /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});