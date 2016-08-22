import Ember from 'ember';

export default Ember.Controller.extend({
  isRegisterModalVisible: false,
  isLoginModalVisible: false,
  isLoggedIn: false,
  userIsOfAge: false,

  cookies: Ember.inject.service(),

  queryParams: {
    isRegisterModalVisible: 'register',
    isLoginModalVisible: 'login',
  },

  init() {
    this._super(...arguments);
    // check if there is cookie value for user_is_of_age???
    if (this.get('cookies').read('user_is_of_age')) {
      this.set('userIsOfAge', true);
    }
  },

  actions: {
    allowUserToEnter: function() {
      this.toggleProperty('userIsOfAge');
      this.get('cookies').write('user_is_of_age', 'true');
    },

    blockUserFromSite: function() {

    },

    toggleLoginModal: function() {
      this.toggleProperty('isLoginModalVisible');
    },

    toggleRegisterModal: function() {
      this.toggleProperty('isRegisterModalVisible');
    },

    register: function(registerValues) {
      this.toggleProperty('isRegisterModalVisible');
    },

    login: function(loginValues) {
      this.toggleProperty('isLoginModalVisible');
    },
  },
});
