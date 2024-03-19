import {useEffect} from 'react'; //useStates removed, change to use useWorkoutsContext
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {
    //const [workouts, setWorkouts] = useState([]); 
    const {workouts, dispatch} = useWorkoutsContext(); 

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts') //setting on the in frontend/package.json Line 2  "proxy" in the viedo in not work now, need to install http-proxy-middleware make the file setupProxy.js 
            const json = await response.json();
            

            if (response.ok) {
                //setWorkouts(json)
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }

        fetchWorkouts()
    }, [dispatch])

    return (
        <div> 
            <div className='workouts'>
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetails workout={workout} key={workout._id} />
                ))}
            </div>
          <WorkoutForm />
        </div> 
    );
    }

export default Home;