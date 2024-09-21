import { FaCarAlt, FaCheckCircle } from "react-icons/fa"

export function Card() {
    return (
        <div className="card w-96 shadow-xl bg-white text-black m-2">
            <div className="p-5 flex justify-between">
                <div>
                    <h6 className="font-bold">Boca Raton Parking</h6>
                    <p className="text-gray-400">555 Jackson St, SF</p>
                    <div className="mt-2 flex gap-4">
                        <div className="flex items-center gap-2">
                            <FaCarAlt size={16}/>
                            <p className="text-sm">15 mins</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheckCircle className="text-success"/>
                            <p className="text-sm">Available</p>
                        </div>
                    </div>
                </div>
                <div className="w-20 h-20 rounded-xl">
                    <img className="rounded-xl" src="https://lh3.googleusercontent.com/fife/ALs6j_FiJ7PXU_zmxw86r1KfRGQ9Q6wLgeHnan1KOFD_7XiSZ9L-SkMUd6diqbeJMr8oRlSXVUaJHmmh8SJ9VAUVkY8HpdbVLBV5Df6G7C5erGQx84ow1DelK3cThJMIQnwK69kamNUETOt8uZWcoBsP8eFebPWxPE0JiOsET2m5EDSdqdsZ46p-rIvxAYSS9VAUSf8r6wtV5w3IrdFoRX-yHTuSuEoQzU3EIryAeJgptDIaGY2vkvtFWrG1Lto25i0vwUgi99XAs8aN5bfWrmlPjz731oCD8TyM0Z8Tnm2aIPTrMhMnjvLGExBnWiPxjMWvaeoO689XvW4C28GPvL_xhKz3ku1oLNULwyE6We36QQ9_oJDfwCT4aD5Ri2OZRwJngv38tn5ScceY_PUTQ2K8ywFuxt3fJ3fBaFjEelvaXf0wRsULlJDXKa2PIPO2Qyqq299B_Ieq_npwGEmbEPjYDis5A6oMYp86EHjFUdFybKEkJswBC9PUQgfwm_fXfN2q_ya6egsrxdbTpfPmM6_FxA_DJbXPV2TFSW4zKqoU4JFEqyrhF06s-KpJYNbKk7uBP6--KUGK_EvU0SLsufQqxhkIS_X4g2-WwpbnECM8dY9XHXhlJeyQ-s3OOtPHPzp4rOJo9iZUeQx51kuKs2SJw-eSJmZwwUf3ZXPNCnFftm1uuc0wCQTFi8fK4R5MKWSRB-699025SBMphcaFH6krnI6iqh1aCwC62SaZkTtN0IQNEalVGYg1UNWE2p199KOku3rzFhSpY99NG0vGHYYOJGqu5OsY80tEcOApXkFcQrlAN_RXU_wq6OcSX5JwLKfWLeDXs-wG57bIRozyr-SNLgiPBIB2apqFb1U3lZDaLVA9UHrirDoerSIzsUX3XUiKRiDMWA4zUvy1fjHPf5wt5HaRoiCR2WSOOGiXIJp1pMKhWdb_DFLQNPS4HwyFuDj_AMg-7hM_6QAmIcgMmH2ukjb39VhhBLDmudrL4JruqJqRn2sAq7pQB0b6w5lOcXOEW37I6vg9h0p4XA4OtBks0hViJtlnqBunBdkpnx7JrNXnjnRK0_Vz9TUJiRgioMqSRLZP3Jg4iO5JG9guAAeFsq3Yv-N_mkteiASSxtpC020rvU36nY1eCpKHaNsPcrtRayblMz5PtepkUB0NQ3vYIV9X2Tcd2owXolRxBc7zQnxmN5T-gSSURgiDpac6aIU_Fl5_dWjMyx0jmcHuUAFbR0h1t1s3wgCv87tv7agFZh3W7Q7RWGKFCKZ1rMKT-cqNfM0_xd5m0vK3TotoRgboY9bURfQ7XTcmg22t0F0xwhlUlE-BzSYwCYWpYA=s1024" alt="Parking Image" />
                </div>
            </div>
        </div>
    )
}
