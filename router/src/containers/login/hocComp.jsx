import React from "react";

const hocComp = () => {
    return function(Target) {
        return class extends React.Component {
            render() {
                return <Target>
                <div>this is hoc，啦啦啦啦啦</div>
            </Target>
            }
        }
    }
}
// const hocComp = (Component) => {
//     return function(Target) {
//         return class extends React.Component {
//             render() {
//                 return <Target>
//                 this is hoc
//                 <Component/>
//             </Target>
//             }
//         }
//     }
// }

export default hocComp;