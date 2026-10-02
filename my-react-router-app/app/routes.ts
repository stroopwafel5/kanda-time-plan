import { type RouteConfig, index,route } from "@react-router/dev/routes";

export default [

    index("./routes/crud/Home.jsx"),
    route("/create","./routes/crud/Create.jsx"),
    route("/delete","./routes/crud/Delete.jsx"),
    route("/edit","./routes/crud/Edit.jsx")


] satisfies RouteConfig;