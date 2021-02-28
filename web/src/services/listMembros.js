import api from './api';

async function listMembros() {
  return api.get(`/membros`).then(response => {

    if (response.status === 200) {
      return { status: response.status, data: response.data };
    }

  }).catch(error => {

    if (error.response) {
      return { status: error.response.status, data: error.response };
    } else if (error.request) {
      return { status: 304, data: error.request };
    } else {
      return error;
    }

  });
}

export default listMembros;