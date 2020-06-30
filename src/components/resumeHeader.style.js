const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  userDiv: {
    width: "55%",
    backgroundColor: "white",
    padding: "40px",
    boxShadow: "2px 10px 10px 2px rgba(169, 169, 169, 0.5)",
    zIndex: '10',
  },
  title: {
      fontWeight: 700,
      fontSize: '20px',
      marginBottom: '20px'
  },
  inputDiv: {
      display: 'flex',
      flexDirection: 'row',
  },
  buttonStyles: {
    color: 'white',
    backgroundColor: 'red',
    width: '100%',
    padding: '10px',
    borderRadius: '20px',
    border: 'none',
  },
  inputStyles: {
    width: '95%!important',
    padding: '10px 0 10px 10px!important',
    fontSize: '15px!important',
    border: 'none',
    borderBottom: '1px solid lightgray',
    borderRadius: '0!important'
  }
};

export default styles;
