import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import {Expenses} from "./components/Expenses/Expenses";
import {NewExpense} from "./components/NewExpense/NewExpense";
import Courses from "./courseComponents/Courses";
import {NavBar} from "./navigationComponents/NavBar";
import {Header} from "./headerFooterComponents/header";
import {Footer} from "./headerFooterComponents/footer";
import AddNewCourse from "./courseComponents/AddNewCourse";
import {GetMatches} from "./cricketApiComponent/GetMaches";
import {getMatches} from "./cricketApiComponent/api";
import MyCard from "./GithubComponent/MyCard";

const DUMMY_DATA = [
    {
        id: 'A',
        title: 'Arti',
        amount: 94.12,
        date: new Date(2021, 1, 1),
    },
    {
        id: 'B',
        title: 'Printer',
        amount: 799.49,
        date: new Date(2021, 1, 12) },
    {
        id: 'C',
        title: 'Car Insurance',
        amount: 275.00,
        date: new Date(2021, 2, 25),
    },
    {
        id: 'D',
        title: 'Adjustable Desk',
        amount: 475,
        date: new Date(2021, 4, 30),
    },
    {
        id: 'E',
        title: 'Toys',
        amount: 200,
        date: new Date(2019, 4, 30),
    },
    {
        id: 'F',
        title: 'Story Book',
        amount: 30,
        date: new Date(2020, 4, 25),
    },
    {
        id: 'G',
        title: 'Mobile',
        amount: 1500,
        date: new Date(2020, 4, 25),
    },
];


const App = ()  =>
{
    const [newAddedExpense, setNewAddedExpense] = useState(DUMMY_DATA);

    const AddExpenseDataHandler = (saveExpenseData) =>
    {
        setNewAddedExpense((expense) =>
        {
            return [saveExpenseData, ...expense];
        });
    }

    //Criket Match API
    const [matches, setMatches] = useState([]);

    useEffect(() => {

        getMatches()
            .then((data) => { setMatches(data.matches)})
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="App">
            <Header />
            {/*<h1 className="swami">Jai Swaminarayan - Maharaj Swami Please Mara AA React Learning Ma Masteri Aave tevu karjo</h1>*/}
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/courses">
                        <Courses />
                    </Route>
                    <Route path="/expense-tracker">
                        <NewExpense onAddExpenseData={AddExpenseDataHandler}/>
                        <Expenses items={newAddedExpense} />
                    </Route>
                    <Route path="/add-course">
                        <AddNewCourse />
                    </Route>
                    <Route path="/matches">
                        {matches.map(match => (<GetMatches matches={match} /> ))}
                    </Route>
                    <Route path="/github-users">
                       <MyCard />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </div>
    );
}
export default App;
