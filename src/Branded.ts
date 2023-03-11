class Tagged<Tag> {
  private __tag!: Tag;
}
type Branded<T, Tag> = T & Tagged<Tag>;

export default Branded;
