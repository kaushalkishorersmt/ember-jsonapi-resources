import ApplicationAdapter from './application';
import config from '../config/environment';
import AuthorizationMixin from '../mixins/authorization';

export default ApplicationAdapter.extend(AuthorizationMixin, {
  type: 'post',

  url: config.APP.API_PATH + '/posts',

  fetchUrl: function(url) {
    const proxy = config.APP.API_HOST_PROXY;
    const host = config.APP.API_HOST;
    if (proxy && host) {
      url = url.replace(proxy, host);
    }
    return url;
  }
});
