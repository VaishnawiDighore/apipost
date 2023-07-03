<!-- const MyForm = () => {
  const formik = useFormik({
    initialValues: {
      selectField: ''
    },
    onSubmit: values => {
      // Handle form submission
      console.log(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="selectField">Select Field:</label>
      <Select
        id="selectField"
        options={options}
        onChange={option => formik.setFieldValue('selectField', option.value)}
        onBlur={formik.handleBlur('selectField')}
        value={options.find(option => option.value === formik.values.selectField)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
<Link className="text-muted" to="/school-details">
                              <i className="fa fa-edit"></i>
                            </Link> -->