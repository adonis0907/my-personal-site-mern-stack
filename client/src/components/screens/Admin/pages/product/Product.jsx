import './product.css'
import {Link} from 'react-router-dom'
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import {Publish} from '@material-ui/icons'




export default function Product(){
  return(
    <div className="product">
      <div className="productTitleContainer">
        <h1 className='productTitle'>Product</h1>
        <Link to="/newproduct">
        <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales performance"/>
        </div>
        <div className="productTopRight">
            <div className="productInfoTop">
              <img src="https://asset.conrad.com/media10/isa/160267/c1/-/en/002196849PI00/image.jpg" alt="" className="productInfoImg"/>
              <span className="productName">Apple Airpods</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">123</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">sales:</span>
                <span className="productInfoValue">5000</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">active:</span>
                <span className="productInfoValue">yes</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">in stock:</span>
                <span className="productInfoValue">no</span>
              </div>
            </div>
        </div>
      </div>
      <div className="productBottom">
          <form className="productFrom">
            <div className="productFormLeft">
              <label>Product Name</label>
              <input type="text" placeholder="Apple Airpod"/>
              <label>In Stock</label>
              <select className="inStock" id="inStock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

              <label>Active</label>
              <select className="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="productFromRight">
              <div className="productUpload">
                <img className="productUploadImg" src="https://asset.conrad.com/media10/isa/160267/c1/-/en/002196849PI00/image.jpg" alt="" />
                <label for="file">
                    <Publish />
                </label>
                <input type="file" id="file" style={{display:"none"}} />
              </div>
              <button className='productButton'>Update</button>

            </div>
          </form>
      </div>
    </div>
  )
}
