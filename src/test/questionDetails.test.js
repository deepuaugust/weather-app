import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionDetails from '../components/questionDetails';

configure({ adapter: new Adapter() });
const mockStore = configureStore();
jest.mock('react-dom');

let initialState = {
    questionDetailsReducer: {
            data: [],
    }
};

const location = {
    pathname:'/question/29'
}

const history = {
    push : function(){}
}

let store = mockStore(initialState);

const div = global.document.createElement('div');
describe("QuestionDetails Component", () => {
    it('renders without crashing', () => {
        ReactDOM.render(<Router><QuestionDetails store={store} location={location} history={history} /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});