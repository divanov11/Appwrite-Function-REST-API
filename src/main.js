import AppExpress from "@itznotabug/appexpress";
const app = new AppExpress();
import userRoutes from "./routes/user.js";

app.use("/user", userRoutes);

const getRoutes = (request, response) => {
    response.json({ routes: ["/", "/user/:username", "/user"] });
};

app.get("/", getRoutes);

export default async (context) => await app.attach(context);
