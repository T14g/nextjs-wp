import SkillItemStyles, { Title, ImageBox } from './skill-item.styles';

interface SkillItemProps {
    data: any
};

const SkillItem = ({ data }: SkillItemProps) => {
    const title = data.title.rendered;
    const embedded = data._embedded;
    const image = embedded['wp:featuredmedia'][0].source_url;

    return (
        <SkillItemStyles>
            <ImageBox><img src={image} /></ImageBox>
            <Title>{title}</Title>
        </SkillItemStyles>
    );
};

export default SkillItem;