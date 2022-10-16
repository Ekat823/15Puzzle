const Stopwatch = ({time}) => {
	
	const hours = ("0" + Math.floor((time / 3600000) % 60)).slice(-2);	
	const min = ("0" + Math.floor((time / 60000) % 60)).slice(-2);	
	const sec = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
 
	return <div>Time: {hours}:{min}:{sec}</div>
}
	
export default Stopwatch