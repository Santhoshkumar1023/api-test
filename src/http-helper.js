import axios from "axios";

export const sendRequest = async (args) => {
  try {
    const { url, headers, Auth } = args;
    let headerParams;
    if (Auth) {
      if (headers) {
        headerParams = {
          ...headers,
          Authorization: ``, // Add a token Here
        };
      }
    }

    const response = await axios({
      ...args,
      headers: headerParams,
      url: url,
    });

    return response;
  } catch (error) {
    let status = error?.response?.status;
    return { error, status };
  }
};

export const getRequest = async (args) => {
  const { data, headers, error, status } = await sendRequest({
    ...args,
    method: "get",
  });
  if (status === 200) {
    return {
      data,
      error: null,
      headers,
      status,
    };
  }
  return {
    data,
    error: error || data,
    status,
  };
};

export const postRequest = async (args) => {
  const { data, headers, error, status } = await sendRequest({
    ...args,
    method: "post",
  });

  if ([200, 201, 204].indexOf(status) > -1) {
    return {
      data,
      error: null,
      headers,
      status,
    };
  }
  return {
    data: null,
    error: error || data,
    status,
  };
};
