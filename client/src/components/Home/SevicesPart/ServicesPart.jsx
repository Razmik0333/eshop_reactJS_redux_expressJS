import { useSelector } from 'react-redux';
import { currentLanguageDataSelector } from '../../../helpers/reduxSelectors';
import './styles/_services.scss';

function ServicesPart() {
     const servicesPart = useSelector(currentLanguageDataSelector)?.home?.services_part;
     return (
          <div className="services__part">
          <div className="container services__part__container">
               <div className="service__part">
                    <div className="service-logo">    
                         <svg version="1.1" width="256" height="256" viewBox="0 0 256 256" >
                              <g transform="translate(128 128) scale(0.72 0.72)">
                                   <g  transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)" >
                                        <path className="truck" d="M 85.687 66.088 h -2.755 v -4 h 2.755 c 0.173 0 0.313 -0.141 0.313 -0.313 V 47.326 c 0 -0.076 -0.028 -0.149 -0.079 -0.207 L 71.512 30.911 c -0.059 -0.066 -0.145 -0.105 -0.234 -0.105 H 58.633 v 31.282 h 11.295 v 4 H 54.633 V 26.806 h 16.645 c 1.23 0 2.406 0.527 3.224 1.447 L 88.91 44.461 C 89.612 45.25 90 46.268 90 47.326 v 14.448 C 90 64.153 88.065 66.088 85.687 66.088 z"  transform=" matrix(1 0 0 1 0 0) " >

                                        </path>
                                        <path className="truck" d="M 58.633 66.088 H 29.019 v -4 h 25.614 V 22.155 c 0 -2.394 -1.468 -4.417 -3.205 -4.417 H 7.206 C 5.468 17.739 4 19.761 4 22.155 v 38.84 c 0 0.705 0.383 1.093 0.51 1.093 h 11.515 v 4 H 4.51 c -2.487 0 -4.51 -2.284 -4.51 -5.093 v -38.84 c 0 -4.641 3.232 -8.417 7.206 -8.417 h 44.222 c 3.973 0 7.205 3.775 7.205 8.417 V 66.088 z"  transform=" matrix(1 0 0 1 0 0) "  >

                                        </path>
                                        <path className="truck" d="M 76.43 72.262 c -4.688 0 -8.502 -3.814 -8.502 -8.503 s 3.813 -8.502 8.502 -8.502 s 8.502 3.813 8.502 8.502 S 81.118 72.262 76.43 72.262 z M 76.43 59.257 c -2.482 0 -4.502 2.02 -4.502 4.502 c 0 2.483 2.02 4.503 4.502 4.503 s 4.502 -2.02 4.502 -4.503 C 80.932 61.276 78.912 59.257 76.43 59.257 z"  transform=" matrix(1 0 0 1 0 0) "  ></path>
                                        <path className="truck" d="M 22.517 72.262 c -4.688 0 -8.502 -3.814 -8.502 -8.503 s 3.814 -8.502 8.502 -8.502 c 4.688 0 8.502 3.813 8.502 8.502 S 27.205 72.262 22.517 72.262 z M 22.517 59.257 c -2.482 0 -4.502 2.02 -4.502 4.502 c 0 2.483 2.02 4.503 4.502 4.503 s 4.502 -2.02 4.502 -4.503 C 27.019 61.276 24.999 59.257 22.517 59.257 z"  transform=" matrix(1 0 0 1 0 0) "  ></path>
                                        <path className="truck" d="M 88 48.447 H 67.664 c -2.244 0 -4.069 -1.825 -4.069 -4.069 V 28.806 h 4 v 15.573 L 88 44.447 V 48.447 z"  transform=" matrix(1 0 0 1 0 0) "  />
                                   </g>
                              </g>
                         </svg>
                    </div>
                    <div className="service-name">
                         <h3>{servicesPart?.free_shipping}</h3>
                         
                    </div>
               </div>
               <div className="service__part">
                    <div className="service-logo">
                         <svg data-name="Layer 11" id="Layer_11" viewBox="0 0 50 50" >
                         <path className="earphones" d="M42,22.1V18.2C42,9.3,34.4,2,25,2S8,9.3,8,18.2v3.9A7,7,0,0,0,2,29v2a7,7,0,0,0,7,7h3a2,2,0,0,0,2-2V24a2,2,0,0,0-2-2V18.2C12,11.5,17.8,6,25,6s13,5.5,13,12.2V22a2,2,0,0,0-2,2V36a2,2,0,0,0,.5,1.3,19.8,19.8,0,0,1-9.4,3.5,3,3,0,1,0,.2,4,23,23,0,0,0,14.2-6.5l0.3-.4A7,7,0,0,0,48,31V29A7,7,0,0,0,42,22.1ZM10,34H9a3,3,0,0,1-3-3V29a3,3,0,0,1,3-3h1v8Zm34-3a3,3,0,0,1-3,3H40V26h1a3,3,0,0,1,3,3v2Z"/>
                         </svg>
                    </div>
                    <div className="service-name">
                         <h3>{servicesPart?.support}</h3>
                         
                    </div>
               </div>
               <div className="service__part">
                    <div className="service-logo">
                         <svg  id="Layer_1" version="1.0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path className="arrow-right" d="M15,4l7,7l-7,7v-4C3,14,2,19,2,19S3,8,15,8V4z"/>
                         </svg>
                    </div>
                    <div className="service-name">
                         <h3>{servicesPart?.money}</h3>
                         
                    </div>
               </div>
               <div className="service__part">
                    <div className="service-logo">
                         <svg id="Layer_1" version="1.1" viewBox="0 0 512 512">
                         <g>
                              <path className="speaker" d="M218.2,172.4v161.8l201.5,119.5c16.6,9.9,37.7-2.1,37.7-21.5V74.3c0-19.3-21-31.3-37.7-21.5L218.2,172.4z" id="XMLID_5_"/>
                              <path className="speaker" d="M61.3,173.3c-23.1,0-41.9,18.8-41.9,41.9v76.1c0,23.1,18.8,41.9,41.9,41.9h142.2v-160H61.3z" id="XMLID_4_"/>
                              <path className="speaker" d="M467.9,184.1v138.5c22.9-14.6,38.1-40.1,38.1-69.2S490.8,198.6,467.9,184.1z" id="XMLID_3_"/>
                              <path className="speaker" d="M10.3,214.2c-2.4,0-4.3,1.9-4.3,4.3v73.9h33.5v-78.2H10.3z" id="XMLID_2_"/>
                              <path className="speaker" d="M156.9,318c0,0-26.3,58.8,31.7,128.4c5.4,6.4,0.7,16.2-7.7,16.2h-62.1c-4.7,0-8.9-2.5-11.2-6.6   C96.2,435.2,65,368.8,94.1,308.5" id="XMLID_1_"/>
                         </g>
                    </svg>
                    </div>
                    <div className="service-name">
                         <h3>{servicesPart?.discount}</h3>
                         
                    </div>
               </div>
          </div>
     </div>
     )
}
export default ServicesPart;
