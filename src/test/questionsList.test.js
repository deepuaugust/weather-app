import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionsList from '../components/questionsList';

configure({ adapter: new Adapter() });
const mockStore = configureStore();
jest.mock('react-dom');

let initialState = {
    questionsReducer: {
            data: [],
    }
};

const location = {
    pathname:'/'
}

const history = {
    push : function(){}
}

let store = mockStore(initialState);
const div = global.document.createElement('div');
describe("QuestionsList Component", () => {
    it('renders without crashing', () => {
        ReactDOM.render(<Router><QuestionsList store={store} location={location} history={history} /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});