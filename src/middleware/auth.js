const authMiddleware = (request, __, log) => {
    const { token } = request.headers;

    if (!token) {
        log("No token");
    } else {
        log("There is a token..");
    }
};

export default authMiddleware;
