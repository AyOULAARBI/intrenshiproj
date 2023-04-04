import { FaBeer} from "react-icons/fa";
// import GoRequestChanges from "react-icons/fa"
import Layout from '../Shared/Layout'
function Dashboard({auth,total,confirmed,unconfirmed,paid}) {
    console.log(total,confirmed,unconfirmed,paid)
  return (
    <div className="flex m-8 flex-col">
        <div className="flex gap-4 w-full ">
            <div className="flex items-center flex-1 space-x-2 bg-red-200 shadow rounded-sm  p-4 border-gray-200">
                <div className="">
                    <i className="text-red-400 text-7xl w-full h-full fa fa-list"/>
                </div>
                <div className="flex items-center justify-center flex-col-reverse">
                <p className="text-2xl font-bold">Total</p>
                <p className="text-4xl font-bold">{total.length}</p>
                </div>
                
            </div>
            <div className="flex items-center flex-1 space-x-2 bg-red-200 shadow rounded-sm  p-4 border-gray-200">
            <div className="">
                    <i className="text-red-400 text-7xl w-full h-full fa fa-ban"/>
                </div>
                <div className="flex items-center justify-center flex-col-reverse">
                <p className="text-2xl font-bold">Unconfirmed</p>
                <p className="text-4xl font-bold">{unconfirmed.length}</p>
                </div>
            </div>
            <div className="flex items-center flex-1  space-x-2 bg-red-200 shadow rounded-sm  p-4 border-gray-200">
            <div className="">
                    <i className="text-red-400 text-7xl w-full h-full fa fa-check"/>
                </div>
                <div className="flex items-center justify-center flex-col-reverse">
                <p className="text-2xl font-bold">confirmed</p>
                <p className="text-4xl font-bold">{confirmed.length}</p>
                </div>
            </div>
            <div className="flex space-x-2 items-center flex-1 bg-red-200 shadow rounded-sm  p-4 border-gray-200">
            <div className="">
                    <i className="text-red-400 text-7xl w-full h-full fa fa-dollar"/>
                </div>
                <div className="flex items-center justify-center flex-col-reverse">
                <p className="text-2xl font-bold">Paid</p>
                <p className="text-4xl font-bold">{paid.length}</p>
                </div>
            </div>
            

        </div>

    </div>
  )
}

export default Dashboard
Dashboard.layout = page=> <Layout isEmployee={true} children={page} />