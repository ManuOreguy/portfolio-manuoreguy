interface Props {
  name: string;
  position: string;
  description: [];
  thumbnail: string;
}

function ExperienceListItem({ name, position, description, thumbnail }: Props) {
  return (
    <div>
      <div>{name}</div>
      <div>{position}</div>
      <div>{description}</div>
      <div>{thumbnail}</div>
    </div>
  );
}

export default ExperienceListItem;
