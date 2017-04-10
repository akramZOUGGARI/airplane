
(function(){
   
    angular
        .module("airplaneFacts")
        .controller("listCtrl", ListController);
   
    ListController.$inject = ['DataService'];

    function ListController(DataService){
        var vm = this;

        vm.data = DataService.airplaineData; // Controller reference to  info created in the factory
        vm.activeAirplaine = {}; // w used in the view to hold the data of currently active item
        vm.changeActiveAirplaine = changeActiveAirplaine; // reference to a named function below ...      
        vm.search = ""; // will hold the search query (user uses search bar)

        function changeActiveAirplaine(index){
           
            vm.activeAirplaine = index;
        }
    }


})();
