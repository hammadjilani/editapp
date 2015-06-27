/**
 * Created by 192.168.3.18 on 5/30/2015.
 */

var myApp=angular.module('myTableApp',[]);
    myApp.service('myService', function () {
        var myId=1;
        var contacts=[{id:0,'name':"Hammad",'email':'hammadjilani@hot','phone':"0315-9265669"}];
        this.list= function () {
            return contacts;
        };
        this.save= function (contact) {
            if(contact.id==undefined)
            {
                contact.id=myId++;
                contacts.push(contact);
            }
            else
            {
                for(i in contacts){
                    contacts[i].id=contact.id;
                    contacts[i]=contact;
                }
            }

        };
        this.delete = function (id) {
            for (i in contacts) {
                if (contacts[i].id == id) {
                    contacts.splice(i, 1);
                }
            }
        };
        this.edit= function (id) {
            for(i in contacts){
                if(contacts[i].id==id){
                    return contacts[i];
                }
            }
        }
    });
