import {calculateInvestmentResults, formatter} from '../util/investment.js';
export function Results({input}){
    const resultData=calculateInvestmentResults(input);
    const initialInvestment=resultData[0].valueEndOfYear-resultData[0].interest-resultData[0].annualInvestment;
    return(
<table id='result'>
    <thead>
        <tr>
            <th>Year</th>
            <th>investment Value</th>
            <th>Intrest (Year)</th>
            <th>Total Intrest</th>
            <th>Invested Capital</th>
        </tr>
    </thead>
    <tbody>
        {resultData.map((yearData)=>{
            const totalIntrest=yearData.valueEndOfYear-yearData.annualInvestment*yearData.year-initialInvestment;
            const InvestedCapital=yearData.valueEndOfYear-totalIntrest;
            return <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalIntrest)}</td>
                <td>{formatter.format(InvestedCapital)}</td>
                </tr>
            
        })}
    </tbody>
</table>    )
}