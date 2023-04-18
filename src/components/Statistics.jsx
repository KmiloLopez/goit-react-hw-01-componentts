import Proptypes from "prop-types";
import { NewSection, Statts ,Boxi} from "./Statistics.styled";
/* var collor = Math.floor(Math.random()*16777215).toString(16); */

function Statistics({ title, stats }) {
    console.log(stats);
    return (
        <NewSection>
            <h2 className="title">{title}</h2>
            <Statts>
                
                    {stats.map((item) => (
                        <Boxi key={item.id} type={stats} >
                            <span className="label">{item.label}</span>
                            
                            <span className="percentage">
                                {item.percentage}%
                            </span>
                            
                        </Boxi>
                    ))}
                
            </Statts>
        </NewSection>
    );
}
Statistics.propTypes = {
    title: Proptypes.string,
    stats: Proptypes.arrayOf(
        Proptypes.shape({
            id: Proptypes.string.isRequired,
            label: Proptypes.string,
            percentage: Proptypes.number,
        })
    ),
};
export default Statistics;
