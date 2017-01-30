import controller from './dashboard.controller';

const DashboardComponent = {
    controller,
    template: `
        <div class="col-md-3 dashboard">
            <h5>DASHBOARD</h5>
            <table class="table table-bordered">
                <tr>
                    <td class="col-md-5">Number of Fighters</td>
                    <td>{{$ctrl.numberOfFighters}}</td>
                </tr>
            </table>
        </div>
     `
};

export default DashboardComponent;
