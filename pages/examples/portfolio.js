import Page from '../../components/page'
import Layout from '../../components/layout'

export default class extends Page {
  render() {
    return (
      <Layout {...this.props} title="Layout and Styling">
        <h1 className="display-2">Портфолио</h1>
      </Layout>
    )
  }
}
