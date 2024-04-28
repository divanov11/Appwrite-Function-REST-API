import AppExpress from "@itznotabug/appexpress";
const router = new AppExpress.router();

const getUser = (request, response) => {
    const { username } = request.params;
    response.json({ username: username });
};

const createUser = (request, response) => {
    response.json({ postData: request.body });
};

router.get("/:username", getUser);
router.post("/", createUser);

export default router;
