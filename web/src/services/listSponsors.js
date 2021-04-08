import api from './api';

async function listSponsors() {
  return api.get(`/patrocinadores`).then(response => {

    return { status: response.status, data: response.data };

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

export default listSponsors;