function formValidation() {
  return {
    form: {
      name: '',
      email: '',
      phone: '',
      dropdown: null,
      terms: false,
    },
    errors: {},
    showModal: false,
    validateForm() {
      this.errors = {}; // Clear errors

      // Name Validation
      if (!this.form.name.trim()) {
        this.errors.name = 'Name is required.';
      }

      // Email Validation
      if (!this.form.email.trim()) {
        this.errors.email = 'Email is required.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
        this.errors.email = 'Enter a valid email.';
      } else if (this.isPublicEmail(this.form.email)) {
        this.errors.email = 'Please use your company email address.';
      }

      // Phone Number Validation
      if (!this.form.phone.trim()) {
        this.errors.phone = 'Phone number is required.';
      } else if (!/^\d{8}$/.test(this.form.phone)) {
        this.errors.phone = 'Enter a valid phone number.';
      }

      // Dropdown Validation
      if (!this.form.dropdown) {
        this.errors.dropdown = 'Please select a company size.';
      }

      // Terms Validation
      if (!this.form.terms) {
        this.errors.terms = 'You must accept the terms and conditions.';
      }

      // If no errors, submit the form
      if (Object.keys(this.errors).length === 0) {
        this.showModal = true;
        this.resetForm();
      }
    },

    isPublicEmail(email) {
      const publicDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'aol.com', 'icloud.com'];
      const emailDomain = email.split('@')[1];
      return publicDomains.includes(emailDomain.toLowerCase());
    },

    clearError(field) {
      delete this.errors[field]; // Clear error for the specific field
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        phone: '',
        dropdown: null,
        terms: false,
      };
    },
  };
}