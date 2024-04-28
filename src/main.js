import AppExpress from "@itznotabug/appexpress";
const app = new AppExpress();

const getRoutes = (request, response) => {
    response.json({ routes: ["/", "/user/:username", "/user"] });
};

const getUser = (request, response) => {
    const { username } = request.params;
    response.json({ username: username });
};

const createUser = (request, response) => {
    response.json({ postData: request.body });
};

app.get("/", getRoutes);
app.get("/user/:username", getUser);
app.post("/user", createUser);

export default async (context) => await app.attach(context);

// export default async ({ req, res, log, error }) => {
//     return res.send("Hello, World!");
// };
