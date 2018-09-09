import http from '../../http/http'

const LOGIN = "ACTION_LOGIN";

const state = {
    status: "",
    token: ""
};

const actions = {
    [LOGIN]: ({commit}, {phoneNumber, password}) => {

    },
};

const mutations = {
    [LOGIN]: (state, token) => {
        state.status = "success";
        state.token = token;
    }
};
