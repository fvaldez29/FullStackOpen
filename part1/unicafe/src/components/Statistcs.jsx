
export const Statistcs = ({good, neutral, bad, text}) => {

    const total = good + neutral + bad
    const average = total === 0 ? 0 : (good - bad) / total
    const positivePercentage = total === 0 ? 0 : (good / total) * 100;
  

    const StatisticLine = ({text, value}) => {
        return (
            <p>{text}: {value}</p>
        )
    }

    if(good === 0 && neutral === 0 && bad === 0){
        return (
            <div>No feedback provided</div>
        )
    }

    return (
        <>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positivePercentage} />
        </>
    )
}
