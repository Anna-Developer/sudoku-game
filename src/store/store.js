import reducer from "./reducer";

const store = {
    _state: reducer(),
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log(''); // функция пустышка     
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state = reducer(this._state, action);
        this._callSubscriber();
    }
}
window.store = store;

export default store