export default function handleInputChange(evt) {
  this.setState({
    [evt.target.name]: evt.target.value
  })
}
