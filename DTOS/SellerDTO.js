import userDetails from "../SharedVariable/userDetails"
function getDtoObject () {
    class DTO {
        constructor() {
            this.data = {
                ProfileURL: "",
                ShopeItem: [],
                Orders: []
            };
            this.userData = null;
    
            this.getUserData = async () => {
                if (this.userData == null) {
                    this.userData = userDetails();
                    return this.userData;
                }
                return this.userData;
            };
            this.setProfileIMG = async () => {
                const usData = await this.getUserData();
                const payload = {
                    UserData: {
                        email: usData.Email,
                        password: usData.Password
                    }
                };
                const respose = await fetch(`http://${ip}:8000/getProfileImg`, payload);
                if (respose.ok) {
                    this.data.ProfileURL = respose.URL;
                }
            };
            this.setShopeItem = async () => {
                const usData = await this.getUserData();
                const payload = {
                    UserData: {
                        email: usData.Email,
                        password: usData.Password
                    }
                };
                const respose = await fetch(`http://${ip}:8000/getShopeItem`, payload);
                if (respose.ok) {
                    this.data.ShopeItem.push(...respose.ShopeData);
                }
            };
            this.updateOrders = async () => {
                const usData = await this.getUserData();
                const payload = {
                    UserData: {
                        email: usData.Email,
                        password: usData.Password
                    }
                };
                const respose = await fetch(`http://${ip}:8000/updateOrders`, payload);
                if (respose.ok) {
                    this.data.Orders.push(...respose.OrderData);
                }
            };
        }
    }
    let instance ;

    return function () {
        if (!instance){
            instance = new DTO ;
        }
        return instance;
    }
}

const getDto =  getDtoObject();

export default getDto