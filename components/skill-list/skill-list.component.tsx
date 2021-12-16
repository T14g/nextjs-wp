import SkillItem from '../skill-item/skill-item.component';

interface SkillListProps {
    skills: Array<any>
};

const SkillList = ({ skills }: SkillListProps) => {
    if (skills.length > 0) {
        return (
            <>
                {
                    skills.map((item, index) =>
                        <SkillItem data={item} key={index} />
                    )
                }
            </>
        );
    }
};

export default SkillList