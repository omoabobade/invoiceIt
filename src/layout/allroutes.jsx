import InvoiceIndex from "../views/invoice/index.jsx"
import InvoiceAdd from "../views/invoice/add.jsx"
import InvoiceEdit from "../views/invoice/edit.jsx"

const AllRoutes = [
    {title:"Home", component: InvoiceAdd, icon:"", to:"/"},
    {component: InvoiceIndex, icon:"", to:"/invoice/"},
    {component: InvoiceEdit, icon:"", to:"/invoice/edit/:id"},
]

export default AllRoutes