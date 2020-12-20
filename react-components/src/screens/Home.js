import React, {Component} from 'react'
import { 
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle
} from 'reactstrap'
import { Loading } from '../components/Loading'
import { baseUrl } from '../common/baseUrl'
import { FadeTransform } from 'react-animation-components'
  
function RenderCard({item, loading, error}) {

    if (loading) {
        return(
            <Loading />
        )
    }
    else if (error) {
        return(
            <>
            <h4>{error}</h4>
            <p>error</p>
            </>
        )
    }
    else {
        return(
            (item) &&
            <>
                <FadeTransform in transformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}>
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                    <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
                </FadeTransform>
            </>
        )
    }
}

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="container">
          <div className="row align-items-start">
              <div className="col-12 col-md m-1">
                  <RenderCard item={this.props.dish} loading={this.props.dishesLoading} error={this.props.dishesErrorMessage} />
              </div>
              <div className="col-12 col-md m-1">
                  <RenderCard item={this.props.promotion} loading={this.props.promoLoading} error={this.props.promoErrorMessage} />
              </div>
              <div className="col-12 col-md m-1">
                  <RenderCard item={this.props.leader} loading={this.props.leaderLoading} error={this.props.leaderErrorMessage} />
              </div>
          </div>
      </div>
  );
  }
}

export default Home