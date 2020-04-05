import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NewQuestion from '../components/newQuestion';

configure({ adapter: new Adapter() });
jest.mock('react-dom');

const location = {
    pathname:'/add/question'
}

const history = {
    push : function(){}
}

const div = global.document.createElement('div');

describe("NewQuestion Component", () => {
    it('renders without crashing', () => {
        ReactDOM.render(<Router><NewQuestion location={location} history={history} /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});