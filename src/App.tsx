import PostContainer from "./components/PostContainer";
import './App.css'

function App() {
    // const {users, isLoading, error} = useTypedSelector(state => state.userReducer);
    // const dispatch = useAppDispatch();
    //
    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, [])

    return (
        <div className="App">
            {/*{isLoading ? <h1>Loading</h1> : error ? error :*/}
            {/*    JSON.stringify(users, null, 2)*/}
            {/*}*/}
            <PostContainer/>
        </div>
    );
}

export default App;
