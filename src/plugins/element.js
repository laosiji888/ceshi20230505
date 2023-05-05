import Vue from 'vue'
import {
    Button,
    Form,
    FormItem,
    Input,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Backtop,
    // Message,
    Container,
    Header,
    Aside,
    Main,
    Breadcrumb,
    BreadcrumbItem,
    MenuItem,
    Card,
    Col,
    Row,
    Table,
    TableColumn,
    Switch,
    Tooltip,
    Pagination,
    Dialog,
    MessageBox,

    Tag,
    Tree,
    // Alert,
    Step,
    Steps,
    Checkbox,
    Link,
    RadioGroup,
    TabPane,
    Tabs,
    carousel,
    carouselItem,
    RadioButton,
    Rate,
    Menu,
    Submenu,
    DatePicker,
    Select,
    Option,
    Upload,
    Carousel,
    CarouselItem
} from 'element-ui'
Vue.use(Rate)
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Backtop)
Vue.use(Carousel)
Vue.use(CarouselItem)
    // Vue.use(Message);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(MenuItem);
Vue.use(Card);
Vue.use(Col);
Vue.use(Row);
Vue.use(Table)
Vue.use(TableColumn);
Vue.use(Switch);
Vue.use(Tooltip);
Vue.use(Pagination);
Vue.use(Dialog);
// Vue.use(MessageBox);
Vue.use(Tag);
Vue.use(Upload)
Vue.use(Tree);
// Vue.use(alert);
Vue.use(Step);
Vue.use(Steps)
Vue.use(Checkbox)
Vue.use(Link)
Vue.use(RadioGroup)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(RadioButton)
Vue.use(DatePicker)
    // Vue.use(Option)
Vue.use(Select)
Vue.use(Option)


// Vue.prototype.$message = Message

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt