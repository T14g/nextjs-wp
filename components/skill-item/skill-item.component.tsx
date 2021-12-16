import SkillItemStyles from './skill-item.styles';

interface SkillItemProps {
    data: any
};

const SkillItem = ({ data }: SkillItemProps) => {
    const title = data.title.rendered;
    
    return (
        <SkillItemStyles>
            {title}
        </SkillItemStyles>
    );
};

export default SkillItem;