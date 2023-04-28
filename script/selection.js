
function selectionSort() {
    
        c_delay=0;
    
        for(var i=0;i<array_size-1;i++)
        {
            divUpdate(divs[i],div_sizes[i],"red");//Color update
    
            index_min=i;
    
            for(var j=i+1;j<array_size;j++)
            {
                divUpdate(divs[j],div_sizes[j],"yellow");//Color update
    
                if(div_sizes[j]<div_sizes[index_min])
                {
                    if(index_min!=i)
                    {
                        divUpdate(divs[index_min],div_sizes[index_min],"blue");//Color update
                    }
                    index_min=j;
                    divUpdate(divs[index_min],div_sizes[index_min],"red");//Color update
                }
                else
                {
                    divUpdate(divs[j],div_sizes[j],"blue");//Color update
                }
            }
            
            if(index_min!=i)
            {
                var temp=div_sizes[index_min];
                div_sizes[index_min]=div_sizes[i];
                div_sizes[i]=temp;
    
                divUpdate(divs[index_min],div_sizes[index_min],"red");//Height update
                divUpdate(divs[i],div_sizes[i],"red");//Height update
                divUpdate(divs[index_min],div_sizes[index_min],"blue");//Color update
            }
            divUpdate(divs[i],div_sizes[i],"green");//Color update
        }
        divUpdate(divs[i],div_sizes[i],"green");//Color update
    
        enable();
    }
