import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { createStream } from "../../actions";

class StreamFormComponent extends Component {
  renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className={"ui error message"}>
          <div className={"header"}>{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  render() {
    const { handleSubmit, onSubmit } = this.props;

    return (
      <form className={"ui form error"} onSubmit={handleSubmit(onSubmit)}>
        <Field
          name={"title"}
          type={"text"}
          label={"Enter Title"}
          component={this.renderInput}
        />
        <Field
          name={"description"}
          type={"text"}
          label={"Enter Description"}
          component={this.renderInput}
        />
        <button className={"ui button primary"}>Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

const StreamForm = reduxForm({ validate, form: "streamForm" })(
  StreamFormComponent
);

export { StreamForm };
