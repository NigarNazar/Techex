
import "../Home/Test.css"
import Object from "./Object.json"
const Test = () => {
    return (
        <div className='test'>
            <div className="test-our row">
                <div className="col-12 card-test">
                    <h6><img src="http://upmedia.az/assets/img/home7/title.svg" alt="" /> Testimonials</h6>
                    <h1><span>Techex</span> use the tool you loves</h1>
                </div>
              
                    {
                        Object && Object.map(value => {
                            return (
                                <>
                    <div className="col-sm-12 col-lg-3 col-md-6 card-side card-dedector">
                    <div className="card-all">
                                        <div className="card-logo" key={value.id}>
                                            <img src={value.img} alt="" />
                                            <div className="card-name">
                                                <h4>{value.title}</h4>
                                                <span>{value.body}</span>
                                            </div>
                                        </div>
                                        <div className="card-paragraf">
                                            <span>{value.paragraf}</span>
                                        </div>
                                    </div>
                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
      

    )
}

export default Test